<h1>🍌 Fresh Fruit Backend</h1>

<p>This is the backend server for the Fresh Fruit Website. It is built with <strong>Node.js</strong>, <strong>Express.js</strong>, and <strong>MongoDB</strong>.</p>

<h2>⚙️ Features</h2>
<ul>
  <li>RESTful API for fruits, users, orders, and authentication</li>
  <li>MongoDB database connection</li>
  <li>JWT-based authentication</li>
  <li>CORS enabled for frontend and admin dashboard</li>
</ul>

<h2>🛠️ Tech Stack</h2>
<ul>
  <li>Node.js</li>
  <li>Express.js</li>
  <li>MongoDB (with Mongoose)</li>
  <li>JWT for Auth</li>
  <li>dotenv for environment config</li>
</ul>

<h2>📦 Installation</h2>
<pre><code>npm install</code></pre>

<h2>▶️ Running the Server</h2>
<pre><code>npm start</code></pre>
<p>Server runs on: <code>http://localhost:5000/</code></p>

<h2>🔐 Environment Variables</h2>
<p>Create a <code>.env</code> file in the <code>backend/</code> folder:</p>
<pre><code>PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret</code></pre>

<h2>📁 API Routes</h2>
<table>
  <thead>
    <tr>
      <th>Route</th>
      <th>Method</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>/api/fruits</td><td>GET</td><td>Get all fruits</td></tr>
    <tr><td>/api/fruits</td><td>POST</td><td>Add a new fruit</td></tr>
    <tr><td>/api/users</td><td>POST</td><td>User registration/login</td></tr>
    <tr><td>/api/orders</td><td>POST</td><td>Create new order</td></tr>
  </tbody>
</table>
