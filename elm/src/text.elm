module Button exposing (..)

import Html exposing (beginnerProgram, button, div, text)
import Html.Events exposing (onClick)


view : Int -> Html.Html Msg
view model =
    div [] [ text "+" ]


type Msg
    = Increment
    | Decrement


update : Msg -> Int -> Int
update msg model =
    case msg of
        Increment ->
            model + 1

        Decrement ->
            model - 1


main : Program Never Int Msg
main =
    beginnerProgram { model = 0, view = view, update = update }
