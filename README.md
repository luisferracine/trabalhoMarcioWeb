# Atlas de Países

Aplicação web construída com Next.js + React para explorar países da API Rest Countries.

## Funcionalidades

- Listagem de países em cards com bandeira, nome, região, capital e população.
- Filtros por região no header, com atualização instantânea da lista.
- Página dinâmica de detalhes por país em /pais/[code].
- Exibição de dados complementares no detalhe: sub-região, área, idiomas, moedas, fuso horário, FIFA, status ONU e link do Google Maps.

## Tecnologias utilizadas

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint
- API externa Rest Countries

## Pré-requisitos

- Node.js 20+
- pnpm 9+

Se você ainda não tiver pnpm instalado:

```bash
npm install -g pnpm
```

## Como executar o projeto

1. Clone o repositório e entre na pasta:

```bash
git clone <url-do-repositorio>
cd trabalho-marcio-web
```

2. Instale as dependências:

```bash
pnpm install
```

3. Rode o servidor de desenvolvimento:

```bash
pnpm dev
```

4. Acesse no navegador:

```text
http://localhost:3000
```

## Scripts disponíveis

- Desenvolvimento:

```bash
pnpm dev
```

- Build de produção:

```bash
pnpm build
```

- Iniciar app em modo produção:

```bash
pnpm start
```

- Lint:

```bash
pnpm lint
```

- Verificação de tipos (TypeScript):

```bash
pnpm -s tsc --noEmit
```

## Estrutura principal

```text
app/
	Components/
		Card.tsx
		CountryFiltersPanel.tsx
	lib/
		api/
			api.ts
	pais/
		[code]/
			page.tsx
	globals.css
	layout.tsx
	page.tsx
```

## Fluxo de navegação

- Página inicial:
	mostra os filtros e a listagem de países.
- Botão "Ver detalhes do país" no card:
	abre a rota dinâmica /pais/[code].
- Página de detalhes:
	busca os dados completos do país pelo código (alpha code).

## Fonte de dados

Este projeto utiliza a API pública Rest Countries:

- Lista simplificada:
	https://restcountries.com/v3.1/all?fields=name,flags,region,capital,population,cca2
- Detalhe por código:
	https://restcountries.com/v3.1/alpha/{code}

## Boas práticas para contribuição

- Mantenha componentes reutilizáveis e com tipagem forte.
- Evite acoplar UI diretamente ao formato bruto da API.
- Centralize normalização de dados no módulo de API.
- Rode lint e verificação de tipos antes de abrir PR.

## Troubleshooting rápido

- Porta 3000 em uso:
	rode com outra porta, por exemplo: pnpm dev -- -p 3001
- Falha de fetch para API externa:
	valide conexão de rede e disponibilidade da Rest Countries.
- Tipos quebrando após mudança de payload:
	ajuste a normalização em app/lib/api/api.ts.

## Próximos passos sugeridos

- Migrar img para next/image para otimização.
- Adicionar estados de loading e skeleton na página inicial.
- Implementar testes de componentes e integração.
