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

## Projeto

### UX/UI
Escolhi um design system mais simples com cores neutras para que o foco seja o código em si.
Decidi por não utilizar Tailwind (apesar de gostar muito), mas utilizar o SCSS com o padrão BEM.
Apesar do desenvolvimento com o Tailwind ser mais rápido, quis mostrar algum conhecimento em padrões conhecidos no mercado.

### Lógica dos filtros
Temos 3 categorias (além do filtro de busca por nome): departamento, cargo e experiência.
Filtros aplicados em categorias diferentes tendem a refinar mais a busca, porém, se muitos filtros são aplicados numa mesma categoria, o resultado fica mais abrangente.
Vamos passar por um exemplo prático.

Abaixo, escolhemos o filtro de tecnologia da categoria "departamento" e obtemos 4 resultados:
![Captura de tela de 2024-02-14 00-56-24](https://github.com/Ital0Alve5/logcomex-project/assets/71088021/bb1f1a5a-b3e0-4e75-a56e-2f2127e3d257)

Em seguida, escolheremos apenas o filtro de Financial Assistant na categoria "cargo". 
Estamos querendo buscar algum Financial Assistant especificamente no departamento de Tecnologia.
Como não temos um colaborador que seja Financial Assistant dentro do departamento de Tecnologia, não temos resultados:

Mas se adicionarmos mais um filtro dentro da categoria "cargo", podemos ter a chance de abranger um pouco mais a busca.
Se filtrarmos pelo departamento de Tecnologia e um Frontend Engineer junto com um Financial Assistant na categoria "cargo", já temos alguns resultados.
Isso porque estamos procurando ou um Frontend Engineer ou um Financial Assistant dentro da Tecnologia. Se não temos um Financial Assistant, temos dois Frontend Engineers para satisfazer a busca.


