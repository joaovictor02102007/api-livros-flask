
# API de Livros com Flask

## Objetivo
Desenvolver uma API simples utilizando Python e Flask
para disponibilizar informações de três livros.

## Tecnologias
- Python
- Flask

## Instalação

Criar o ambiente virtual:

python -m venv venv

Ativar o ambiente no Windows (CMD):

venv\Scripts\activate.bat

Instalar as dependências:

pip install -r requirements.txt

## Execução

Execute:

python app.py

## Rota disponível

GET /livros

Endereço local:
http://127.0.0.1:5000/livros

## Resultado

A API retorna um objeto JSON contendo
três livros, com id, titulo, autor e ano.
