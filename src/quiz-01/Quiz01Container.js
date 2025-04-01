import { useState } from "react";
import Quiz01Component from "../components/Quiz01Component";
function Quiz01Container(  ) {

    const [num , setNum ] = useState(0)
    const plus = () => {
        setNum(num + 1)
    }
    const sub = () => {
        setNum(num - 1)
    }
    return (<>
        <Quiz01Component n={num} p={plus} s={sub} />
    </>)
}
export default Quiz01Container;