<div align="center">


<img src="https://capsule-render.vercel.app/api?type=waving&color=0:4000ff,50:7c3aed,100:00d4ff&height=220&section=header&text=WhatsApp%20OTP%20API&fontSize=52&fontColor=ffffff&animation=fadeIn&fontAlignY=35&desc=⚡%20Powered%20by%20UDMODZ&descAlignY=55&descSize=18" width="100%"/>



<br/>


[![Node.js](https://img.shields.io/badge/Node.js-≥22-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express-4.18-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-API-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://web.whatsapp.com)
[![Vercel](https://img.shields.io/badge/Vercel-Ready-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)


[![Version](https://img.shields.io/badge/Version-3.0.0-7c3aed?style=for-the-badge&logoColor=white)](https://github.com/udmodz0)
[![License](https://img.shields.io/badge/License-FREE-00d4ff?style=for-the-badge&logoColor=white)](https://github.com/udmodz0)
[![Status](https://img.shields.io/badge/Status-Active-00ff88?style=for-the-badge&logoColor=white)](https://github.com/udmodz0)

<br/>


```
██╗░░░██╗██████╗░███╗░░░███╗░█████╗░██████╗░███████╗
██║░░░██║██╔══██╗████╗░████║██╔══██╗██╔══██╗╚════██║
██║░░░██║██║░░██║██╔████╔██║██║░░██║██║░░██║░░███╔═╝
██║░░░██║██║░░██║██║╚██╔╝██║██║░░██║██║░░██║██╔══╝░░
╚██████╔╝██████╔╝██║░╚═╝░██║╚█████╔╝██████╔╝███████╗
░╚═════╝░╚═════╝░╚═╝░░░░░╚═╝░╚════╝░╚═════╝░╚══════╝
```

</div>

---


<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

## <img src="https://media.giphy.com/media/iY8CRBdQXODJSCERIr/giphy.gif" width="30"> &nbsp;About

> **WhatsApp OTP API** is a high-performance, serverless-ready authentication system that delivers OTP codes directly through WhatsApp messages. Built with a custom Baileys fork (`noname089`), sessions are securely stored on GitHub — making it cloud-native and infinitely scalable.

<div align="center">

| 🧩 Feature | 📝 Description |
|:---:|:---|
| 🔐 **Pairing API** | Link WhatsApp accounts via pairing code |
| 📨 **OTP Delivery** | Send OTP with one-tap copy button |
| 💬 **Custom Messages** | Send any formatted text message |
| 🤖 **Bot Management** | Delete or check status of linked bots |
| ☁️ **GitHub Sessions** | Persistent sessions stored on GitHub |
| 🌐 **Multi-Platform** | Deploy on Vercel, VPS, or locally |
| 🔒 **HTTPS Ready** | Auto-generated self-signed certs for local dev |
| 🧠 **Smart Reconnect** | Auto-reconnects saved bots on startup |

</div>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

## <img src="https://media.giphy.com/media/WUlplcMpOCEmTGBtBW/giphy.gif" width="30"> &nbsp;Architecture

```mermaid
graph LR
    A["🌐 Client"] -->|"HTTP Request"| B["⚡ Express Server"]
    B -->|"/pair"| C["📲 Pairing Engine"]
    B -->|"/send"| D["💬 Message Relay"]
    B -->|"/manage"| E["🔧 Bot Manager"]
    B -->|"/health"| F["💚 Health Check"]
    C --> G["🔑 Baileys (noname089)"]
    D --> G
    G -->|"Session Sync"| H["🐙 GitHub Storage"]
    
    style A fill:#4000ff,color:#fff,stroke:#7c3aed
    style B fill:#7c3aed,color:#fff,stroke:#4000ff
    style G fill:#25D366,color:#fff,stroke:#128C7E
    style H fill:#333,color:#fff,stroke:#666
```

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

## <img src="https://media2.giphy.com/media/QssGEmpkyEOhBCb7e1/giphy.gif" width="30"> &nbsp;API Endpoints

<details>
<summary><b>📲 1. Request Pairing Code</b></summary>
<br/>

```http
GET /pair?number={phone_number}
```

| Parameter | Type | Description |
|:---|:---|:---|
| `number` | `string` | **Required.** Phone number (digits only) |

**✅ Success Response:**
```json
{
  "status": "success",
  "code": "WORK-CODE"
}
```

**⚠️ Already Paired:**
```json
{
  "status": "already_authenticated",
  "message": "This bot is already paired to api."
}
```
</details>

<details>
<summary><b>💬 2. Send Message / OTP</b></summary>
<br/>

```http
GET /send?text={message}&botNumber={from}&receiver={to}
```

| Parameter | Type | Description |
|:---|:---|:---|
| `text` or `msg` | `string` | **Required.** Message content |
| `botNumber` | `string` | **Required.** Sender bot number |
| `receiver` | `string` | **Required.** Destination number |
| `otp` | `string` | *Optional.* OTP code — adds a **📋 Copy OTP** button |

**✅ Success Response:**
```json
{
  "status": "success",
  "message": "Message sent"
}
```

> 💡 **Pro Tip:** When `otp` is provided, the message is sent as an interactive view-once message with a native copy-code button!
</details>

<details>
<summary><b>🔧 3. Manage Bot</b></summary>
<br/>

```http
GET /manage?number={phone_number}&action=delete
```

| Parameter | Type | Description |
|:---|:---|:---|
| `number` | `string` | **Required.** Bot phone number |
| `action` | `string` | **Required.** Action to perform (`delete`) |

**✅ Success Response:**
```json
{
  "status": "success",
  "message": "Bot {number} deleted."
}
```
</details>

<details>
<summary><b>💚 4. Health Check</b></summary>
<br/>

```http
GET /health
```

**✅ Response:**
```json
{
  "status": "ok",
  "bots": [
    {
      "number": "94710000000",
      "status": "open",
      "lastUpdate": "2026-03-24T14:00:00.000Z"
    }
  ]
}
```
</details>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

## ⚙️ Tech Stack

<div align="center">

<table>
<tr>
<td align="center" width="120">
<img src="https://skillicons.dev/icons?i=nodejs" width="48" height="48" alt="Node.js"/>
<br/><b>Node.js</b>
<br/><sub>≥ 22</sub>
</td>
<td align="center" width="120">
<img src="https://skillicons.dev/icons?i=express" width="48" height="48" alt="Express"/>
<br/><b>Express</b>
<br/><sub>v4.18</sub>
</td>
<td align="center" width="120">
<img src="https://skillicons.dev/icons?i=github" width="48" height="48" alt="GitHub"/>
<br/><b>Octokit</b>
<br/><sub>Session Store</sub>
</td>
<td align="center" width="120">
<img src="https://skillicons.dev/icons?i=vercel" width="48" height="48" alt="Vercel"/>
<br/><b>Vercel</b>
<br/><sub>Serverless</sub>
</td>
</tr>
</table>

</div>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

## 🚀 Deployment

<details>
<summary><b>🖥️ Local Development</b></summary>
<br/>

```bash
# 1. Clone the repository
git clone https://github.com/udmodz0/auth-wa-api.git
cd auth-wa-api

# 2. Install dependencies
npm install

# 3. Configure environment
#    Create config.env or .env with:
#    GITHUB_REPO_URL=https://github.com/your-user/your-repo
#    GITHUB_SECRET_KEY=ghp_your_personal_access_token

# 4. Start the server
npm start
```

> 🔒 **HTTPS Note:** Local development uses a self-signed certificate. Click **Advanced → Proceed to localhost** in your browser to bypass the warning.

</details>

<details>
<summary><b>🟣 Deploy to Vercel (Serverless)</b></summary>
<br/>

1. Connect your repository to [Vercel](https://vercel.com)
2. Vercel auto-detects `vercel.json` & `api/index.js`
3. Set **Environment Variables** in the Vercel dashboard:

| Variable | Value |
|:---|:---|
| `GITHUB_REPO_URL` | `https://github.com/user/repo` |
| `GITHUB_SECRET_KEY` | `ghp_your_token` |
| `NODE_ENV` | `production` |

4. Deploy! 🚀

> ⚡ **Note:** Vercel is serverless — bots connect on-demand when an API call is made.

</details>

<details>
<summary><b>☁️ Deploy to VPS / Node.js Host</b></summary>
<br/>

1. Ensure **Node.js 22+** is installed
2. Clone the repository
3. Set environment variables:

```bash
export GITHUB_REPO_URL="https://github.com/user/repo"
export GITHUB_SECRET_KEY="ghp_your_token"
export NODE_ENV="production"
export PORT=8080
```

4. Install & start:

```bash
npm install
npm start
```

5. The server auto-connects all saved bots from GitHub on startup ✅

</details>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

## 📁 Project Structure

```
auth-wa-api/
├── 📄 api/
│   └── index.js          # 🧠 Core server — all routes & bot logic
├── 📄 vercel.json         # ⚡ Vercel serverless config
├── 📄 package.json        # 📦 Dependencies & scripts
├── 📄 .gitignore          # 🚫 Ignores sessions, env files, node_modules
└── 📄 README.md           # 📖 You are here!
```

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

## 📦 Dependencies

<div align="center">

| Package | Purpose |
|:---|:---|
| `noname089` | 🔌 Custom Baileys fork for WhatsApp Web API |
| `express` | ⚡ Fast HTTP server framework |
| `@octokit/rest` | 🐙 GitHub API client for session storage |
| `cors` | 🌐 Cross-origin request handling |
| `dotenv` | 🔧 Environment variable management |
| `pino` | 📊 Ultra-fast JSON logger |
| `selfsigned` | 🔒 Self-signed SSL certificate generation |
| `gradient-string` | 🎨 Beautiful console gradients |
| `chalk` | 🖌️ Terminal string styling |
| `axios` | 🌐 HTTP client |
| `adm-zip` | 🗜️ ZIP file handling |
| `cheerio` | 🔍 HTML parser |
| `jimp` | 🖼️ Image processing |
| `megajs` | ☁️ Mega cloud storage |
| `mongodb` | 🍃 MongoDB driver |
| `moment-timezone` | 🕐 Timezone-aware dates |

</div>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

## ⚠️ Environment Variables

| Variable | Required | Description |
|:---|:---:|:---|
| `GITHUB_REPO_URL` | ✅ | Full URL to your GitHub session storage repo |
| `GITHUB_SECRET_KEY` | ✅ | GitHub Personal Access Token (PAT) with repo access |
| `NODE_ENV` | ❌ | Set to `production` for HTTP mode (default: HTTPS with self-signed cert) |
| `PORT` | ❌ | Server port (default: `8080`) |

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

## 🔐 How It Works

```mermaid
sequenceDiagram
    participant C as 🌐 Client
    participant S as ⚡ Server
    participant W as 📱 WhatsApp
    participant G as 🐙 GitHub

    Note over C,G: 🔗 Pairing Flow
    C->>S: GET /pair?number=94710000000
    S->>W: Request Pairing Code
    W-->>S: Pairing Code
    S->>G: Save Session
    S-->>C: { code: "ABCD-EFGH" }

    Note over C,G: 📨 Send OTP Flow
    C->>S: GET /send?text=Your OTP: 1234&botNumber=...&receiver=...&otp=1234
    S->>G: Load Session (if offline)
    S->>W: Send Interactive Message with Copy Button
    W-->>S: Delivery ACK
    S-->>C: { status: "success" }
```

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

<div align="center">

## 👨‍💻 Creator

<a href="https://github.com/udmodz0">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=700&size=28&duration=2500&pause=800&color=7C3AED&center=true&vCenter=true&repeat=true&width=300&height=50&lines=UDMODZ" alt="UDMODZ" />
</a>

<br/>

<a href="https://github.com/udmodz0">
  <img src="https://img.shields.io/badge/GitHub-udmodz-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/>
</a>

<br/><br/>

<img src="https://capsule-render.vercel.app/api?type=shark&color=0:4000ff,50:7c3aed,100:00d4ff&height=40&section=footer" width="100%"/>

### ⭐ Star this repo if you found it useful!

<br/>

> 🚫 **This is a FREE API — Do NOT sell it.**
> 
> Made with 💜 by **UDMODZ**

<br/>


<img src="https://github-readme-activity-graph.vercel.app/graph?username=udmodz&theme=tokyo-night&hide_border=true&area=true&custom_title=UDMODZ%20Contribution%20Graph" width="95%"/>

<br/>


<img src="https://capsule-render.vercel.app/api?type=waving&color=0:4000ff,50:7c3aed,100:00d4ff&height=120&section=footer&animation=twinkling" width="100%"/>

</div>
