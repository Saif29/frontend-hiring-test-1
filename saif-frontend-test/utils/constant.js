import { Typography } from "@mui/material"
import DurationCell from "../components/DurationCell"
import StatusButton from "../components/StatusDisplayButton"
import AddNoteCell from "../components/AddNoteCell"

const calculateColumnWidth = (width) => {
    if (typeof window !== 'undefined') {
      const totalWidth = window.innerWidth
      return (totalWidth * width) / 100
    }
  }

export const columns = [
    {
        field: 'call_type',
        headerName: 'CALL TYPE',
        width: calculateColumnWidth(14),
    },
    {
        field: 'direction',
        headerName: 'DIRECTION',
        width: calculateColumnWidth(12),
    },
    {
        field: 'duration',
        headerName: 'DURATION',
        width: calculateColumnWidth(24),
        renderCell: (row) => (
            <DurationCell duration={row?.duration} />
        ),
    },
    {
        field: 'from',
        headerName: 'FROM',
        width: calculateColumnWidth(12),
    },
    {
        field: 'to',
        headerName: 'TO',
        width: calculateColumnWidth(10),
    },
    {
        field: 'via',
        headerName: 'VIA',
        width: calculateColumnWidth(10),
    },

    {
        field: 'created_at',
        headerName: 'CREATED AT',
        width: calculateColumnWidth(10),
        isDate: true,
    },
    {
        field: 'status',
        headerName: 'STATUS',
        width: calculateColumnWidth(10),
        renderCell: (row) => (
            <StatusButton isArchived={row?.is_archived} />
        ),
    },
    {
        field: 'action',
        headerName: 'ACTIONS',
        width: calculateColumnWidth(10),
        renderCell: (row) => (
            <AddNoteCell data={row} />
        ),
    },
  ]