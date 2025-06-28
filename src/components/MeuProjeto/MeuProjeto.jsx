function MeuProjeto(props) {
  
  return (
    <>
      <div className="little-seccao" id="meuprojeto">
                  <h3>{props.nome}</h3>
                  <p>{props.descricao}</p>
                  <a href={props.site}target="_blank">Acessar Projeto</a>
              </div>
      </>
    )
  }
  
export default MeuProjeto
        /*<div className="another-big-seccao">
            <p>{props.nome}</p>
        </div>*/