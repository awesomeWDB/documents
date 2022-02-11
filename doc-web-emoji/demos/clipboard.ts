import Clipboard from 'clipboard';
import { message } from 'antd';

function clipboardSuccess() {
  message.info('复制成功✌️');
}

function clipboardError() {
  message.info('复制失败!');
}

export default function handleClipboard(text: string, event: any) {
  const clipboard = new Clipboard(event.target, {
    text: () => text,
  });
  clipboard.on('success', () => {
    clipboardSuccess();
    clipboard.destroy();
  });
  clipboard.on('error', () => {
    clipboardError();
    clipboard.destroy();
  });
  (clipboard as any).onClick(event);
}
