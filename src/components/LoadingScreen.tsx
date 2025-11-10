const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="animate-pulse">
        <img 
          src="/ed3hub-logo.png" 
          alt="Ed3Hub Logo" 
          className="w-32 h-32 object-contain"
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
