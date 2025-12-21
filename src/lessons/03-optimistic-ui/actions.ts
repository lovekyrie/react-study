// 模拟消息类型
export type Message = {
  id: string;
  text: string;
  sending?: boolean; // 用于标记是否正在发送中
};

// 模拟发送消息 API
export async function sendMessage(text: string): Promise<Message> {
  // 模拟网络延迟
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // 模拟失败情况
  if (text.toLowerCase().includes('error')) {
    throw new Error('发送消息失败：包含非法字符');
  }

  // 成功返回
  return {
    id: Date.now().toString(),
    text,
  };
}

