import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [InputValue, setInputValue] = useState('');

    const onInpuntChange = ({target}) =>{
        // console.log(target.value);
        setInputValue(target.value);
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        //console.log(event);
        if(InputValue.trim().length<=1) return;

        //setcategories( categories => [InputValue, ...categories]);
        onNewCategory(InputValue.trim());

        setInputValue('');
    }

  return (
    <form onSubmit={onSubmit}>
        <input 
            text="text"
            placeholder="Buscar gits"
            value={InputValue}
            onChange={onInpuntChange}
        />
    </form>
  )
}
