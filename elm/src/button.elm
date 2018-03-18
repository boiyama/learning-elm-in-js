module Button exposing (..)

import Html exposing (beginnerProgram, button, div, text)
import Html.Events exposing (onClick)


view : a -> Html.Html Msg
view model =
    div []
        [ button [ onClick Decrement ] [ text "-" ]
        , div [] [ text (toString model) ]
        , button [ onClick Increment ] [ text "+" ]
        ]


type Msg
    = Increment
    | Decrement


update : Msg -> number -> number
update msg model =
    case msg of
        Increment ->
            model + 1

        Decrement ->
            model - 1


main : Program Never number Msg
main =
    beginnerProgram { model = 0, view = view, update = update }
