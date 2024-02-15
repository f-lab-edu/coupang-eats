const App = async () => {
  const data = await fetch("/menu/459c4db4-b37a-473b-9929-ead3f1ab827b");
  const resultData = await data.json();
  console.log("데이터 받아오는지 확인", resultData);
  return <div>test</div>;
};

export default App;
