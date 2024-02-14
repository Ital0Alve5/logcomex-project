# Projeto Logcomex

## Setup

Rodar os comandos abaixo (necessário ter o Docker instalado na máquina):

```bash
# buildar a aplicação
docker build -t logcomex --target deploy .

# Rodar a aplicação (Necessário que a porta 3000 esteja livre).
docker run -p 3000:3000 logcomex
```
A aplicação rodará no endereço: `http://[::]:3000`