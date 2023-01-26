
```mermaid
    sequenceDiagram
        participant browser
        participant server
        
        activate server
        browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
        Note right of server: another one
        server-->>browser: 201 Message
        deactivate server

```