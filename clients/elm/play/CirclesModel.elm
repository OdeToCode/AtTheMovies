module CirclesModule where

import Color exposing (Color, rgb)
import Time exposing (Time)
import Random exposing (generate, int, initialSeed)

type alias Position = { x:Int, y:Int }

type alias CircleSpec = {
    radius: Int,
    xv: Int,
    yv: Int,
    col: Color,
    creationTime: Time
}

type alias Circle = {
    position: Position,
    circleSpec: CircleSpec
}
