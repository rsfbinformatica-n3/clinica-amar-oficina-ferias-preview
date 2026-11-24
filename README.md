# Prévia visual — Oficina de Férias AMAR

Prévia estática de aprovação visual, exportada do staging privado da
Clínica AMAR (`127.0.0.1:8093`, não publicamente acessível) em
2026-11-24.

- **Apenas visual/estrutura.** Faixa etária, datas, horários, valores e
  programação da oficina ainda não foram confirmados pela coordenação.
- **Formulário desativado nesta prévia.** O endpoint de envio real e o
  nonce de segurança foram removidos do HTML; não é possível submeter
  dados daqui. O formulário funcional existe apenas no ambiente de
  homologação (staging, acesso restrito via SSH/Tailscale).
- **Não indexável.** `robots.txt` bloqueia todo o crawling.
- **Não é produção.** O site institucional real continua em
  `https://espacoteamar.com.br`, inalterado por esta prévia.

## Páginas incluídas

- `index.html` — página "Oficina de Férias AMAR".
- `privacidade-oficina-de-ferias.html` — aviso de privacidade do formulário.

## Fonte

Repositório da implementação completa (staging + produção real):
`rsfbinformatica-n3/clinica-amar-wordpress` (privado).
