import React from 'react'
import MaterialTable from 'material-table'
import { Select } from '@material-ui/core'

const Table = (props) => {
    return ( <div> 
        <MaterialTable
            title={props.title}
            options= {
                {
                    paging: true,
                    headerStyle: {
                        backgroundColor: '#01579b',
                        color: '#FFF'
                    },
                }
            }
            data = {props.data}
            columns= {props.columns}
            detailPanel={rowData => {
                return (

                  <iframe
                    width="100%"
                    height="150"
                    src='http://localhost:8000/devices/abcd123'
                  />
                )
              }}
              onRowClick={(event, rowData, togglePanel) => togglePanel()}
        />
    </div>)
}

export default Table