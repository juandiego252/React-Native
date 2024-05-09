
export const BasicTypes = () => {
    const name: string = 'Juan';
    const age: number = 22;
    const active: boolean = true;
    const powers: string[] = ['React','Angular','Vue'];
    powers.push('MoacPy')
    return (
        <>
            <h3>Tipos Basicos</h3>
            {name} {age} {active}

            {powers.join(', ')}
        </>

    )
}
