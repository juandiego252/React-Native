
interface Person {
    firstName: string;
    lastName: string;
    age: number;
    addres: Addres;
    isAlive?: true;
}

interface Addres {
    country: string,
    houseNo: number;
}

export const ObjectLiterals = () => {
    const person: Person = {
        firstName: 'Juan',
        lastName: 'Cordova',
        isAlive: true,
        age: 37,
        addres: {
            country: "Ecuador",
            houseNo: 65
        }
    }

    const {} = person;

    return (
        <>
            <h3>Objetos literales</h3>
            <pre>
                {JSON.stringify(person, null, 2)}
            </pre>
        </>
    )
}
