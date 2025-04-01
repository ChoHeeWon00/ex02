function Quiz01Component({ n , p , s }  ) {
    console.log("num : ", n)
    return (<>
        {n}
        <hr />
        <button onClick={p}>+</button>
        <button onClick={s}>-</button>
    </>)
}
export default Quiz01Component;
