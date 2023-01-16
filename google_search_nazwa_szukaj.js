// google_search_nazwa_szukaj.js

intview.data("https://www.google.com/search?q=(entry().field("nazwa") + " " + entry().field("tag_szukaj_google")))
intview.send()
