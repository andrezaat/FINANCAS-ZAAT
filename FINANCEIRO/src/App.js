{\rtf1\ansi\ansicpg1252\cocoartf2513
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;\f1\fnil\fcharset0 AppleColorEmoji;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import \{ useState \} from "react";\
\
export default function App() \{\
  const [screen, setScreen] = useState("dashboard");\
\
  const Card = (\{ children \}) => (\
    <div className="bg-gray-800 text-white p-4 rounded-2xl shadow-md mb-4">\
      \{children\}\
    </div>\
  );\
\
  const Dashboard = () => (\
    <div>\
      <Card>\
        <h2 className="text-xl font-bold">Hoje</h2>\
        <p>
\f1 \uc0\u55357 \u56496 
\f0  Faturamento: R$ 2.450</p>\
        <p>
\f1 \uc0\u55357 \u56520 
\f0  Lucro: R$ 890</p>\
        <p className="text-red-400">
\f1 \uc0\u9888 \u65039 
\f0  CMV: 38%</p>\
      </Card>\
\
      <Card>\
        <p>
\f1 \uc0\u55357 \u57315 
\f0  iFood: 32 pedidos</p>\
        <p>
\f1 \uc0\u55357 \u57314 
\f0  WhatsApp: 18 pedidos</p>\
      </Card>\
\
      <Card>\
        <p>
\f1 \uc0\u55357 \u56613 
\f0  Produto Top</p>\
        <p className="font-bold">Marmita Executiva</p>\
      </Card>\
    </div>\
  );\
\
  const Pedidos = () => (\
    <div>\
      <Card>\
        <p>
\f1 \uc0\u55357 \u57314 
\f0  #1023 - Marmita + Suco</p>\
        <p>R$28</p>\
      </Card>\
\
      <Card>\
        <p>
\f1 \uc0\u55357 \u57315 
\f0  #1024 - Hamb\'farguer</p>\
        <p>R$34</p>\
      </Card>\
    </div>\
  );\
\
  const Produtos = () => (\
    <div>\
      <Card>\
        <p>
\f1 \uc0\u55356 \u57179 
\f0  Marmita Executiva</p>\
        <p>Custo:}