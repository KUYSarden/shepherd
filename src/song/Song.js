
function Lyrics() {

    const songs = [
        { id: 1,
         title: "Because He Lives",
         par1: " God sent His son, they called Him Jesus,  He came to love heal and forgive,  He lived and died to buy my pardon,  An empty grave is there to prove my Savior lives ",
         par2: "How sweet to hold a newborn baby, And feel the pride and joy he gives.  But greater still the calm assurance, This child can face uncertain days because He lives. ",
         par3: "And then one day I'll cross the river,I'll fight life's final war with pain. And then as death gives way to victory, I'll see the lights of glory and I'll know He lives.", 
         chorus: "Because He lives, I can face tomorrow. Because He lives, All fear is gone! Because I know He holds the future And life is worth the living just because He lives ", 
        },

         {
            id: 2,
            title: "Standing on the Promises",
            par1: "Standing on the promises of Christ, my King,  Through eternal ages let his praises ring; Glory in the highest, I will shout and sing, Standing on the promises of God.",
            par2: "Standing on the promises that cannot fail.  When the howling storms of doubt and fear assail, By the living Word of God I shall prevail,  Standing on the promises of God.",
            par3: "Standing on the promises of Christ, the Lord,  Bound to him eternally by love's strong cord,  Overcoming daily with the Spirit's sword,  Standing on the promises of God.",
            par4: "Standing on the promises I cannot fall, List'ning ev'ry moment to the Spirit's call,  Resting in my Savior as my all in all, Standing on the promises of God. ",
            chorus: "Standing, standing,  Standing on the promises of God, my Savior; Standing, standing,  I'm standing on the promises of God."
         }




     
       ];
    
       
    
       const songList = songs.map((song) => (
        <div className='song' key= {song.id}>
          <h3>{song.title}</h3>
          <p>{song.par1}</p>
          <p>{song.par2}</p>
          <p>{song.par3}</p>
          <p>{song.par4}</p>
          <p>{song.chorus}</p>
    
        </div>
    
      ));
    
      
      return (
        <div>
          {songList}
          
        </div>
      );

}

export default Lyrics;

