[![Open Source Helpers](https://www.codetriage.com/baoduy/react-table-hoc/badges/users.svg)](https://www.codetriage.com/baoduy/react-table-hoc)

# FoldableTable
FoldableTable is a HOC that make the columns are foldable. The reason I developed this HOC because when working on the real project related to the financial which display so many columns for validation and comparison. 

So foldable columns allow users to temporary hidden the unwanted to columns so that they can focus on the data that they want to see.

## Avaibility
The component had been embeded to the original [react-table](https://react-table.js.org/#/story/hoc-readme) and available there. So this repository just for reference purpose. You can using the component directly from here [npm](https://www.npmjs.com/package/react-table).

## How it work
```javascfript
import ReactTable from 'react-table'
import FoldableTableHOC from 'react-table/lib/hoc/foldableTable'

const FoldableTable = FoldableTableHOC(ReactTable);
```
It will scan all the columns which `foldable` is `true` and apply the foldable column feature. This feature will work for both normal columns and header columns as samples below.

- With Header Columns
```javascript
render(){
  return <FoldableTable
           columns={[{
              Header: "Name",
              foldable: true,
              columns: [{
                  Header: "First Name",
                  accessor: "first_name"
                },{
                  Header: "Last Name",
                  accessor: "last_name"
                }]
              },{
              Header: "Info",
              foldable: true,
              columns: [{
                  Header: "Email",
                  accessor: "email"
                },{
                  Header: "Gender",
                  accessor: "gender"
               }]
            }]
        }/>
}
```

![With Header Columns](https://raw.githubusercontent.com/baoduy/Images/master/Wordpress/JavaScripts/react-table%20foldableHOC/FoldableTable%20With%20Header.gif)

- With Normal Columns
```javascript
render() {
    return <FoldableTable
        columns={[{
                Header: "First Name",
                accessor: "first_name"
            },
            {
                Header: "Last Name",
                accessor: "last_name",
                foldable: true,
            },
            {
                Header: "Email",
                accessor: "email",
                foldable: true,
            },
            {
                Header: "Gender",
                accessor: "gender",
                foldable: true,
            }]}></FoldableTable>
}
```

![With Normal Columns](https://raw.githubusercontent.com/baoduy/Images/master/Wordpress/JavaScripts/react-table%20foldableHOC/FoldableTable%20Without%20Header.gif)

- The `FoldableTable` also fully compatible with existing HOCs, below is with selectTableHOC.

![With Normal Columns](https://raw.githubusercontent.com/baoduy/Images/master/Wordpress/JavaScripts/react-table%20foldableHOC/FoldableTable%20With%20selectTable.gif)
