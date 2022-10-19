import Formulario from "./Formulario"
import Resultado from "./Resultado"
import Loading from "./Loading"
import useClima from "../hooks/useClima" // Lo traigo para que muestre el resultado cuando este listo

const AppClima = () => {

  const {resultado, cargando, noResultado} = useClima() // Vienen del provider

  return (
    <>
        <main className="dos-columnas">
            <Formulario />

            {/* resultado?.name esto se pone para que aparezca algo solo cuando llenamos los campos en el formulario */}  
            { 
              cargando ? <Loading /> :              
              resultado?.name ? <Resultado /> :
              noResultado ? <p>{noResultado}</p> :
              <p></p>
            } 
            
        </main>
    </>
  )
}

export default AppClima