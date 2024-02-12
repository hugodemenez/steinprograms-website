function Post({content}:{content:string}) {
  return (
    <div className="" dangerouslySetInnerHTML={{ __html: content.replaceAll('\n','<br/>') }}></div>
  );
}

export default Post;
