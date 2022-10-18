import React from "react"
import classes from "./FormsControls.module.css"



const Element = Element => ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
        return (
            <div className={hasError ? classes.formControl + " " + classes.error : undefined}>
                <div>
                    <Element {...input} {...props} />
                </div>
                { hasError && <span> {meta.error} </span> } 
            </div>
        )
    }

export const Textarea = Element("textarea");

export const Input = Element("input");



// export const Textarea = ({ input, meta, ...props }) => {
// const hasError = meta.touched && meta.error;
//     return (
//         <div className={hasError && classes.formControl + " " + classes.error}>
//             <div>
//                 <textarea {...input} {...props} />
//             </div>
//             { hasError && <span> {meta.error} </span> } 
//         </div>
//     )
// }


// export const Input = ({ input, meta, ...props }) => {
//     const hasError = meta.touched && meta.error;
//             return (
//             <div className={hasError && classes.formControl + " " + classes.error}>
//                 <div>
//                     <input {...input} {...props} />
//                 </div>
//                 { hasError && <span> {meta.error} </span> } 
//             </div>
//         )
//     }




