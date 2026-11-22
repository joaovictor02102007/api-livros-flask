import { useState } from 'react'

function App() {
  // Estado: lista de livros, carregamento e erro
  const [livros, setLivros] = useState([])
  const [carregando, setCarregando] = useState(false)
  const [erro, setErro] = useState('')

  // Executada somente ao clicar no botão (onClick)
  async function buscarLivros() {
    setCarregando(true)
    setErro('')
    setLivros([])
    try {
      // O proxy do Vite encaminha /api/livros para http://127.0.0.1:5000/livros
      const response = await fetch('/api/livros')
      if (!response.ok) {
        throw new Error(`Erro HTTP ${response.status}`)
      }
      const dados = await response.json()
      setLivros(dados.livros)
    } catch (e) {
      setErro('Não foi possível buscar os livros. Verifique se a API está em execução.')
    } finally {
      setCarregando(false)
    }
  }

  return (
    <main className="container">
      <h1>Catálogo de Livros</h1>
      <button onClick={buscarLivros} disabled={carregando}>Buscar Livros</button>

      <section className="mensagens">
        {carregando && <p>Carregando livros...</p>}
        {erro && <p className="erro">{erro}</p>}
      </section>

      <section className="livros">
        {livros.map((livro) => (
          <article key={livro.id} className="livro">
            <p><strong>ID:</strong> {livro.id}</p>
            <p><strong>Título:</strong> {livro.titulo}</p>
            <p><strong>Autor:</strong> {livro.autor}</p>
            <p><strong>Ano:</strong> {livro.ano}</p>
          </article>
        ))}
      </section>
    </main>
  )
}

export default App
