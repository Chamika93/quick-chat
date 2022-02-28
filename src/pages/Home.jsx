const Home = () => {
    return (
      <div className="container mx-auto">
        <div className="flex flex-row">
          <div className="w-2/4">
            <img src="/banner.jpg" alt="image" className="w-4/5 mx-auto"/>
          </div>
          <div className="w-2/4">
            <h1 className="text-[44px] font-roboto" data-testid="mainText">Create a disposable chat quickly without a hassle.</h1>
            <p className="text-lg font-roboto">Connect, collaborate and celebrate from anywhere with Quick Chat</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;
  