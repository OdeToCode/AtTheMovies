(function(){

    var pong = angular.module("pong", []);

    pong.config = {
        width: 1024,
        height: 640
    };

}());


// RAF service
// SVG wrapper that takes service and updates
// shapes, and how they intersect
// keyboard input
// ball
// paddle
// boundaries

//namespace WindowsFormsApplication2
//{
//    public class PongGame
//{
//    public static Rectangle paddle1 = new Rectangle(14, 180, 20, 100);
//    public static Rectangle paddle2 = new Rectangle(566, 180, 20, 100);
//    public static Rectangle ball = new Rectangle(290, 115, 16, 16);
//    static Font Drawfont = new Font("Arial", 40);
//    public static bool p1movesUp, p1movesDown, p2movesUp, p2movesDown;
//    public static SolidBrush sb = new SolidBrush(Color.White);
//    public static double p1p;                           //Double that will store player 1 score
//    public static double p2p;                           //Double that will store player 2 score
//    static int RandoMin = 1;                            //Those 2 random integers are used to randomize ball directions
//    static int RandoMax = 3;                            //in the Randomize() method to avoid repetition of ball movement
//    public static double Xspeed = -1;                   //Beginning Initial speed
//    public static double Yspeed = 1;
//
//    public static void DrawIt(Graphics Draw)
//{   //Draws both paddles and ball
//    Draw.Clear(Color.Black);
//    Draw.FillRectangle(sb, paddle2);
//    Draw.FillRectangle(sb, paddle1);
//    Draw.FillRectangle(sb, ball);
//    //Draw Score
//    Draw.DrawString(p1p.ToString(), Drawfont, sb, 180, 10);
//    Draw.DrawString(p2p.ToString(), Drawfont, sb, 380, 10);
//}
//
//    public static void CheckIfMoving()                      //If player press the key to move the paddle, this method
//    {                                                       //changes the Y position of the paddle Accordingly
//        if (p1movesUp == true)
//        { int z = paddle1.Y <= 0 ? paddle1.Y = 0 : paddle1.Y -= 3; }
//        if (p1movesDown == true)
//        { int z = paddle1.Y >= 381 ? paddle1.Y = 381 : paddle1.Y += 3; }
//        if (p2movesUp == true)
//        { int z = paddle2.Y <= 0 ? paddle2.Y = 0 : paddle2.Y -= 3; }
//        if (p2movesDown == true)
//        { int z = paddle2.Y >= 381 ? paddle2.Y = 381 : paddle2.Y += 3; }
//    }
//
//    public static void Restart()                            //Method called upon player scoring, to reset speed values
//    {                                                       //and ball position
//        ball.X = 290;   Yspeed = 1;
//        ball.Y = 115;   RandoMin = 1;
//        Xspeed = -1;    RandoMax = 3;
//    }
//
//    public static void CheckScore()                         //Check if any player has scored, and increase p1p accordingly
//    {
//        if (ball.X < 1)
//        { p2p += 1; Restart(); }
//        else if (ball.X > 579)
//        { p1p += 1; Restart(); }
//    }
//
//    public static void IncreaseSpeed()                      //Increase both the normal speed and the results of
//    {                                                       //any possible randomization in the Randomize() method
//        RandoMin += 1;
//        RandoMax += 1;
//        Xspeed = Xspeed < 0 ? Xspeed -= 1 : Xspeed += 1;
//    }
//
//    public static void MoveBall(Timer t1)
//    {
//        ball.X += (int)Xspeed;                                     //Changes ball coordinates based on speed in both x & y axis
//        ball.Y += (int)Yspeed;
//        if (ball.Y > 465 || ball.Y < 0) { Yspeed = -Yspeed; }     //If ball touch one of the Y bounds, it's y speed gets a change in sign, and ball rebounce
//        if (ball.X > 579 || ball.X < 1) { Xspeed = -Xspeed; }     //Same for X bounds, with x speed
//        if (ball.IntersectsWith(paddle1) || ball.IntersectsWith(paddle2))
//        {
//            int dst = paddle1.Y + 100;
//            int Distance = dst - ball.Y;
//            if (Distance > 75 || Distance < 25) { Randomize(); }  //If the ball intersects the paddle "away" from the centre, the ball movement get randomized
//            else { Xspeed = -Xspeed; }                             //else, it's speed on the X axis gets simply reverted
//        }
//    }
//
//    static void Randomize()
//    {
//        Random r = new Random();
//
//        double s = r.Next(RandoMin, RandoMax);                     //Uses RandoMin & RandoMax values to randomize the X speed of the ball
//        Xspeed = ball.IntersectsWith(paddle1) ? Xspeed = s : Xspeed = -s;
//
//        if (Yspeed < 0)                                            //If ball is moving upward, (so y speed is negative) the random value assigned
//        {                                                          //will be changed in sign, so the ball can still go upward
//            double t = r.Next(RandoMin, RandoMax);
//            Yspeed = -t;
//        }
//        else                                                       //Else, directly change the Y speed to a positive value
//        { Yspeed = r.Next(RandoMin, RandoMax); }
//    }                                                              //End of PongGame Class
//}
//
//public partial class Form1 : Form
//{
//    Graphics Draw;
//    SolidBrush sb = new SolidBrush(Color.White);
//    public Form1()
//    {
//        InitializeComponent();
//        pictureBox1.BackColor = Color.Black;
//        Draw = pictureBox1.CreateGraphics();
//
//        timer1.Interval = 10;
//        timer1.Start();
//        timer2.Start();
//    }
//
//
//    private void timer1_Tick(object sender, EventArgs e)
//    {
//        PongGame.DrawIt(Draw);                      //Draws paddles & ball
//        PongGame.MoveBall(timer1);                  //Moves the ball
//        PongGame.CheckScore();                      //Check if one player scored
//        PongGame.CheckIfMoving();                   //Method that check if player is moving up or down the paddle
//    }
//
//    private void Form1_KeyDown(object sender, KeyEventArgs e)
//    {
//        if (e.KeyData == Keys.S)
//        { PongGame.p1movesDown = true; }
//        if (e.KeyData == Keys.W)
//        { PongGame.p1movesUp = true; }
//        if (e.KeyData == Keys.L)
//        { PongGame.p2movesDown = true; }
//        if (e.KeyData == Keys.P)
//        { PongGame.p2movesUp = true; }
//    }
//
//    private void Form1_KeyUp(object sender, KeyEventArgs e)
//    {
//        if (e.KeyData == Keys.S)
//        { PongGame.p1movesDown = false; }
//        if (e.KeyData == Keys.W)
//        { PongGame.p1movesUp = false; }
//        if (e.KeyData == Keys.L)
//        { PongGame.p2movesDown = false; }
//        if (e.KeyData == Keys.P)
//        { PongGame.p2movesUp = false; }
//    }
//
//    private void timer2_Tick(object sender, EventArgs e)
//    { PongGame.IncreaseSpeed(); }     //Every 3 seconds, this timer will increase Overall speed
//}
//}