import React from 'react'
import MaterialTable from 'material-table'

const Table = (props) => {
    return ( <div> 
        <MaterialTable title='Devices'
        options= {
            {
                paging: true,
                headerStyle: {
                    backgroundColor: '#01579b',
                    color: '#FFF'
                  }
            }
        }
        data = {props.data}
        columns= {props.columns} />
    </div>)
}

export default Table