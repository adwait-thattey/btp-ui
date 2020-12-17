import React from 'react'
import MaterialTable from 'material-table'
// import { Select } from '@material-ui/core'

const Table = (props) => {
  return ( 
    <div style={{width: "75vw"}}> 
      <MaterialTable
        title={props.title}
        options= {
          {
            search: true,
            paging: false,
            headerStyle: {
                backgroundColor: '#01579b',
                color: '#FFF',
                fontWeight: 'bolder',
                fontSize: '15px'
            },
          }
        }
        data = {props.data}
        columns= {props.columns}
      />
    </div>
  )
}

export default Table  