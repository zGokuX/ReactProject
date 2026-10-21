
export default function ButtonCS( props ){
    return (
    <>
    {
    /*Si può utilizzare anche un colore custom inserito da parametro example:
    
    <ButtonCS color='red'>Ciao</ButtonCS>

    Il nostro bottone invece di usare il colore predefinito dal CSS utilizzerà il colore che gli
    verrà passato nei parametri
    */}
    <button className={props.classArrived || "custom-button"} onClick={props.onClick} style={{backgroundColor: props.color, fontSize: props.size, width: props.width, height: props.height}}>{props.children}</button>
    </>
        
    )
}