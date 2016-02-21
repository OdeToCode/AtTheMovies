import DelayedMousePositions exposing (delayedMousePositions)
import DrawCircles exposing (drawCircles)
import Fibonacci exposing (fibonacci)
import List exposing (drop, reverse)
import Signal.Extra exposing ((~), (<~))
import Window


main =
    drawCircles
        <~ delayedMousePositions (fibonacci 8 |> drop 1 |> reverse)
        ~ Window.dimensions