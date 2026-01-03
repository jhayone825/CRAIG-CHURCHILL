import bcrypt from "bcryptjs";

export default async function handler(req,res){
  if(req.method!=="POST"){
    return res.status(405).end();
  }

  const { email, password } = req.body;

  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0] ||
    req.socket.remoteAddress;

  const time = new Date().toISOString();

  // Hash password (not readable)
  const hash = await bcrypt.hash(password, 10);

  console.log({
    email,
    ip,
    time,
    passwordHash: hash
  });

  res.status(200).json({ ok:true });
}
