// 模拟后端 API
// 接收 FormData，返回包含 error 或 success 消息的对象
export async function signupUser(prevState: any, formData: FormData) {
  // 模拟网络延迟
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const email = formData.get('email') as string;

  // 简单的校验
  if (!email || !email.includes('@')) {
    return {
      error: '请输入有效的邮箱地址',
      email: email,
    };
  }

  // 模拟服务器端错误 (例如邮箱已被注册)
  if (email === 'error@example.com') {
    return {
      error: '该邮箱已被注册',
      email: email,
    };
  }

  // 成功
  return {
    message: '注册成功！请查收验证邮件。',
    email: '',
  };
}

