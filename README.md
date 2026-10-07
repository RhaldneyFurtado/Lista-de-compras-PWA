# Lista de Compras Inteligente (PWA)

Progressive Web Application (PWA) desenvolvida para otimizar o planejamento e a execução de compras, oferecendo sincronização em tempo real, cálculo de custos e controle de listas.

---

## Acesso à Aplicação

A versão de produção está disponível no link:  
[https://rhaldneyfurtado.github.io/Lista-de-compras-PWA/](https://rhaldneyfurtado.github.io/Lista-de-compras-PWA/)

---

## Funcionalidades Principais

- **Autenticação com Google:** Login integrado utilizando a conta Google através do Firebase Auth.
- **Sincronização em Tempo Real:** Dados salvos na nuvem via Firestore com otimização de sincronização, garantindo consistência entre dispositivos.
- **Modos de Operação:** 
  - *Planejamento:* Organização prévia dos itens necessários.
  - *Execução:* Acompanhamento em tempo real durante as compras com controle de subtotais.
- **Gestão de Histórico:** Consulta de compras finalizadas para controle de despesas.
- **Instalação (PWA):** Suporte para instalação direta em dispositivos móveis e desktops como aplicativo nativo.
- **Controle de Versão:** Mecanismo integrado de checagem (`version.json`) para gerenciamento de cache e atualizações automáticas de versão.

---

## Tecnologias Utilizadas

O projeto foi construído utilizando a seguinte stack:

- **React / Vite:** Biblioteca para construção de componentes e empacotamento de alta performance.
- **Tailwind CSS:** Framework utilitário para estilização responsiva.
- **Firebase (Auth & Firestore):** Backend-as-a-Service para autenticação e banco de dados NoSQL em nuvem.
- **Vite PWA Plugin (Workbox):** Configuração de Service Workers e manifesto para funcionalidades PWA.
- **GitHub Pages:** Hospedagem contínua para o ambiente de produção.

---

## Segurança e Arquitetura

- **Isolamento de Dados:** As regras de segurança do Firestore asseguram que cada usuário acesse exclusivamente os seus próprios registros através de validação de UID (`request.auth.uid == userId`).
- **Persistência de Sessão:** Gerenciamento de sessão local combinado com o fluxo de redirecionamento para compatibilidade em navegadores mobile.

---

## Execução Local

Para clonar e executar o projeto em ambiente de desenvolvimento:

1. Clone o repositório:
   ```bash
   git clone [https://github.com/RhaldneyFurtado/Lista-de-compras-PWA.git](https://github.com/RhaldneyFurtado/Lista-de-compras-PWA.git)
   cd Lista-de-compras-PWA
