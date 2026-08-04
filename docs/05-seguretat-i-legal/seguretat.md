# Seguretat

La web corporativa és pública i no implementa autenticació, rols ni rutes
privades.

El dashboard i la seva seguretat són externs a aquest projecte. La variable
`NUXT_PUBLIC_DASHBOARD_URL` només conté una URL pública i no s'hi han de guardar
secrets.
