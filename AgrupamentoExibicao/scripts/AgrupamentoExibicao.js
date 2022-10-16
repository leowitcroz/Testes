/*
Execício:	Agrupamento e exibição
Autor: 		SEU_NOME_ARQUI
Entrega:  Prática
Assunto:  HTML, CSS, JavaScript
*/

// Com os dados usuários e empresas, faça os usuários serem exibidos agrupados pelas empresas que eles pertencem

// Sinta-se a vontade para utilizar as ferramentas necessárias, seja com arquivos em sua máquina (precisará encaminhar arquivos e instruções de execução) ou um simulador por web (ex: https://jsfiddle.net/. Será preciso encaminhar o link de compartilhamento do código produzido)

const usuarios = [
		{
        "id": 1,
        "nome": "Alta Whelpton",
        "email": "awhelpton0@w3.org",
        "data_criacao": "19/06/2020",
        "data_atualizacao": "1661342040000",
        "senha": "cf4e88a95449dfeb820050fc93831a3f6dcf5da0",
        "empresa": "GABVINE"
    },
    {
        "id": 2,
        "nome": "Pernell Axston",
        "email": "paxston1@desdev.cn",
        "data_criacao": "15/02/2020",
        "data_atualizacao": "1659280689000",
        "senha": "830072c5ed6125dad35f02131dfbeb2fc32617a1",
        "empresa": "Gigashots"
    },
    {
        "id": 3,
        "nome": "Laurent Eland",
        "email": "leland2@yellowpages.com",
        "data_criacao": "22/07/2021",
        "data_atualizacao": "1636574234000",
        "senha": "3a8b5ecd66d69a0dcf5e9653fb5748d022c5d91f",
        "empresa": "Gabvine"
    },
    {
        "id": 4,
        "nome": "Gavra Belasco",
        "email": "gbelasco3@aboutads.info",
        "data_criacao": "07/04/2021",
        "data_atualizacao": "1661109149000",
        "senha": "d041fa2c1bb0dfd7a220275657628c4786338b1f",
        "empresa": "Gigashots"
    },
    {
        "id": 5,
        "nome": "Daphne Bownd",
        "email": "dbownd4@angelfire.com",
        "data_criacao": "18/07/2022",
        "data_atualizacao": "1651767338000",
        "senha": "2d8e1a21aa48e860ea45ef42a6615d232058e01c",
        "empresa": "Dynazzy"
    },
    {
        "id": 6,
        "nome": "Durant Giannassi",
        "email": "dgiannassi5@yale.edu",
        "data_criacao": "14/03/2021",
        "data_atualizacao": "1663344760000",
        "senha": "9c03d376262ea8f6ccb01205549a1a202da69622",
        "empresa": "Kaymbo"
    },
    {
        "id": 7,
        "nome": "Tomi Canedo",
        "email": "tcanedo6@nps.gov",
        "data_criacao": "22/07/2020",
        "data_atualizacao": "1656472636000",
        "senha": "84a44ea86dc56e0ff62c4a2c7ced0853d4b27148",
        "empresa": "Zazio"
    },
    {
        "id": 8,
        "nome": "Basilius Malloy",
        "email": "bmalloy7@state.gov",
        "data_criacao": "26/05/2022",
        "data_atualizacao": "1659202101000",
        "senha": "609dada169b716c8635bd725cf234ed42d8da20a",
        "empresa": "GABVINE"
    },
    {
        "id": 9,
        "nome": "Stinky Revie",
        "email": "srevie8@upenn.edu",
        "data_criacao": "20/12/2019",
        "data_atualizacao": "1647133876000",
        "senha": "7e9271134329bdfd92139036d397175a274c4e67",
        "empresa": "Zazio"
    },
    {
        "id": 10,
        "nome": "Bank Garlant",
        "email": "bgarlant9@cyberchimps.com",
        "data_criacao": "25/01/2020",
        "data_atualizacao": "1649190848000",
        "senha": "17d2db2013b24861f801a9f0293383fed6bec314",
        "empresa": "GABVINE"
    },
    {
        "id": 11,
        "nome": "Rodolfo Rettie",
        "email": "rrettiea@gravatar.com",
        "data_criacao": "22/09/2020",
        "data_atualizacao": "1648682165000",
        "senha": "031f1cd368b01bc6b5242d9d167cde9bedfbeb9c",
        "empresa": "GIGASHOTS"
    },
    {
        "id": 12,
        "nome": "Smitty Quinnelly",
        "email": "squinnellyb@weebly.com",
        "data_criacao": "07/05/2020",
        "data_atualizacao": "1654875391000",
        "senha": "0badb4cdf3e3a3022bd3a149e4e977101583e6ac",
        "empresa": "Zazio"
    },
    {
        "id": 13,
        "nome": "Connie Arnold",
        "email": "carnoldc@ed.gov",
        "data_criacao": "17/02/2020",
        "data_atualizacao": "1637426241000",
        "senha": "e0896d098427fa0fccd11407690aae3c92188d09",
        "empresa": "GigaShots"
    },
    {
        "id": 14,
        "nome": "Charo Rowat",
        "email": "crowatd@amazon.com",
        "data_criacao": "27/04/2022",
        "data_atualizacao": "1640848981000",
        "senha": "cc13369d45406d2808cd05f74d8517e7771b72b2",
        "empresa": "GigaShots"
    },
    {
        "id": 15,
        "nome": "Filippo Prettyjohn",
        "email": "fprettyjohne@domainmarket.com",
        "data_criacao": "13/02/2021",
        "data_atualizacao": "1641175976000",
        "senha": "003deae4ced988b61308091df877f3235274da56",
        "empresa": "GigaShots"
    }
]

const empresas = [
    {
        "id": 1,
        "nome": "Gigashots",
        "cnpj": "93.767.824/2368-63",
        "filiais": 15
    },
    {
        "id": 2,
        "nome": "Gabvine",
        "cnpj": "17.424.634/3487-38",
        "filiais": 1
    },
    {
        "id": 3,
        "nome": "Dynazzy",
        "cnpj": "56.152.471/9978-69",
        "filiais": 9
    },
    {
        "id": 4,
        "nome": "Kaymbo",
        "cnpj": "37.463.259/3709-55",
        "filiais": 9
    },
    {
        "id": 5,
        "nome": "Zazio",
        "cnpj": "17.695.507/0362-76",
        "filiais": 13
    },
    {
        "id": 6,
        "nome": "Waterfree",
        "cnpj": "92.054.274/8783-49",
        "filiais": 8
    }
]

export default {
    empresas: empresas,
    usuarios:usuarios
}

