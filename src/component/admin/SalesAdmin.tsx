import { Button, Input, TextField } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { Sales } from '@prisma/client'
import { Dispatch, FormEvent, MouseEvent, SetStateAction, useEffect, useState } from 'react'
import salesOne from '/public/images/sales.webp'
import salesTwo from '/public/images/sales2.webp'
import salesThree from '/public/images/sales3.webp'

type SalesAdminProps = {}

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'title', headerName: 'title', width: 130 },
  { field: 'description', headerName: 'description', width: 130 },
  { field: 'img', headerName: 'img', width: 150 }
];

export function SalesAdminComponent({  }: SalesAdminProps) {
  const [sales, setSales] = useState<Sales[]>([])
  const [showAdd, setShowAdd] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [img, setImg] = useState('')
  console.log('RENDER');
  
  useEffect(() => {
    (async function() {
      const res = await fetch('/api/sales')
      if (res.ok) {
        setSales(await res.json())
      }
    })()
  }, [])

  async function addSale(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const res = await fetch('/api/sales', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title,
        description,
        img
      })
    })
    if (res.ok) {
      const newSale: Sales = await res.json()
      setSales(prevSales => {
        return [...prevSales, newSale]
      })
      setShowAdd(false)
      setTitle('')
      setDescription('')
      setImg('')
    }
  }

  return <>
    <DataGrid
          rows={sales}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
    <Button onClick={() => setShowAdd(true)} disabled={showAdd}>Add sale</Button>
    {showAdd && 
      <form onSubmit={addSale}>
        <TextField label="Title" variant="outlined" value={title} 
          onChange={e => setTitle(e.target.value)} />
        <TextField label="Description" variant="outlined" value={description} 
          onChange={e => setDescription(e.target.value)} />
        <TextField label="Img" variant="outlined" value={img} 
          onChange={e => setImg(e.target.value)} />
        <Button type='submit'>Save</Button>
      </form>
    }
  </>
}