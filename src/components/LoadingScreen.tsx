const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-4">
        <div className="animate-pulse">
          <img 
            src="/ed3hub-logo.png" 
            alt="Ed3Hub Logo" 
            className="w-20 h-20 object-contain opacity-60 grayscale-[30%]"
          />
        </div>
        <div className="flex items-center gap-1">
          <span className="text-muted-foreground text-sm font-medium">Loading</span>
          <span className="animate-pulse text-muted-foreground">.</span>
          <span className="animate-pulse delay-100 text-muted-foreground">.</span>
          <span className="animate-pulse delay-200 text-muted-foreground">.</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
