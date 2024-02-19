function Post({content}:{content:string}) {
  return (
    <ul className="list-disc list-inside" dangerouslySetInnerHTML={{ __html: '<li>'+content.replaceAll('\n','</li><li>').replaceAll('-','') }}></ul>
  );
}

export default Post;
