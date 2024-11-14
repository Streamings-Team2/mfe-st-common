import React from 'react'
import { FieldTable, HeadersTable, OptionsActions } from '../../Models/Table'
import PopoverComponent from '../PopoverComponent/PopoverComponent'
import "./table.css"
import StateComponent from '../StateComponent/StateComponent'

type Props<T, O> = {
    headers: HeadersTable[],
    data: any[]
    editActions?: (detail: FieldTable<T, O>) => void
    optionsActions?: ({ detail, type }: OptionsActions<T, O>) => void
}

const TableComponent = <T, O,>({headers, data, editActions, optionsActions}:Props<T, O>) => {
    const handleChechedClick = () =>{
     console.log("checked")   
    }
    return (
        <table>
            <thead>
                <tr >
                {headers?.length ? (
                    headers.map((header,i) => (
                            <th
                                key={i}
                                className={header.class}
                            >
                                {header.field === "checkbox"
                                    ? (
                                        <div key={header.field}>
                                            <input type="checkbox" onClick={()=>handleChechedClick}/>
                                        </div>
                                    ) : (
                                        <div key={header.field}>
                                            {header.text}
                                        </div>
                                    )
                                }
                            </th>
                    ))
                ):(
                    <th>
                        <td>No Headers</td>
                    </th>
                )}
                </tr>
            </thead>
            <tbody>
            {data.length ? (
                <>
                    {data.map((d: any , i) => (
                            <tr key={i}>
                                {headers.length
                                    ? (
                                        headers.map((header,i) => {
                                            // Object.keys(d.element).some(keyEl => keyEl === header.field) ||
                                            //     header.fieldType === 'actions' || 
                                            //     header.fieldType === 'checkbox'
                                            if (
                                                Object.keys(d).some(keyEl => keyEl === header.field) ||
                                                header.fieldType === 'actions' || 
                                                header.fieldType === 'checkbox'
                                            ) {
                                                if (header.fieldType === 'text') {
                                                    return (
                                                        <td data-label={header.text} key={i}>
                                                            {d[header.field]}
                                                        </td>
                                                    )
                                                }else if (header.fieldType === 'date') {
                                                    return (
                                                        <td data-label={header.text} key={i}>
                                                            {d[header.field]}
                                                        </td>
                                                    )
                                                }else if (header.fieldType === 'link') {
                                                    return (
                                                        <td data-label={header.text} key={i}>
                                                            {d[header.field]}
                                                        </td>
                                                    )
                                                }else if (header.fieldType === 'button-state') {
                                                    return (
                                                        <td data-label={header.text} key={i}>
                                                            <StateComponent status={d[header.field]} text={d[header.field]}/>
                                                        </td>
                                                    )
                                                }else if (header.fieldType === 'dolar') {
                                                    return (
                                                        <td data-label={header.text} key={i}>
                                                        {d[header.field]}
                                                        </td>
                                                    )
                                                }else if (header.fieldType === 'checkbox') {
                                                    return (
                                                        <label key={i}>
                                                            <input type="checkbox" onClick={()=>handleChechedClick()}/>
                                                        </label>
                                                    )
                                                }else if (header.fieldType === 'actions') {
                                                    return (
                                                        <td key={i}>
                                                            <div key={d.id} >
                                                                actionss
                                                                <PopoverComponent 
                                                                    trigger={
                                                                        <button>click me</button>
                                                                    }  
                                                                    content={
                                                                        <div>
                                                                            <p className="text-gray-700 text-sm px-4 py-2">Este es un popover de ejemplo.</p>
                                                                            <p className="text-gray-500 text-xs px-4 py-2">Más información aquí...</p>
                                                                        </div>
                                                                    }
                                                                />
                                                                
                                                                {/* <PopoverComponent
                                                                    classNameButton="no-button color-main"
                                                                    trigger={
                                                                        <>
                                                                            <Ellipsis />
                                                                        </>
                                                                    }
                                                                    content={
                                                                        d.actions?.options && (
                                                                            d.actions.options.map((option: OptionsTable<O>, i: number) => (
                                                                                <div
                                                                                    key={i}
                                                                                    onClick={() => optionsActions({ detail: d.element, type: option.type })}
                                                                                >
                                                                                    {option.text}
                                                                                </div>
                                                                            ))
                                                                        )
                                                                    }
                                                                /> */}
                                                            </div>
                                                        </td>
                                                    )
                                                }else {
                                                    return (
                                                        <td key={i}>
                                                            <div
                                                                key={header.field}>
                                                                ...(not found header FieldType )
                                                            </div>
                                                        </td>
                                                    )
                                                }
                                            } else {
                                                return (
                                                    <td key={i}>
                                                        <div
                                                            key={header.field}>
                                                            ...
                                                        </div>
                                                    </td>
                                                )
                                            }
                                        })
                                    )
                                    : (
                                        <td >
                                            Vacio
                                        </td>
                                    )
                                }
                            </tr>
                    ))}
                </>
            ) : (
                <tr>
                </tr>
            )}
            </tbody>
        </table>
    )
}

export default TableComponent
