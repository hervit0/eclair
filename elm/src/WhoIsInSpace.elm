module WhoIsInSpace exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Json.Decode exposing (..)
import RemoteData exposing (..)
import Http


-- APP


main : Program Never Model Msg
main =
    Html.program
        { init = ( model, Cmd.none )
        , view = view
        , update = update
        , subscriptions = subscriptions
        }


type alias Model =
    { astronauts : WebData (List Astronaut) }


type alias Astronaut =
    { name : String, craft : String }


model : Model
model =
    { astronauts = NotAsked }



-- UPDATE


type Msg
    = AstronautsResponse (WebData (List Astronaut))
    | GetAstronauts


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        GetAstronauts ->
            ( { model | astronauts = Loading }, getAstronauts )

        AstronautsResponse astronauts ->
            ( { model | astronauts = astronauts }, Cmd.none )



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none



-- VIEW


view : Model -> Html Msg
view model =
    body [ styleBody ]
        [ div [ styleMain ]
            [ div [ styleBox ]
                [ h2 [] [ text "Who's in space?" ]
                , button [ styleButton, onClick GetAstronauts ] [ text "Show me!" ]
                , astronautsDisplay model.astronauts
                ]
            ]
        ]


astronautsDisplay : WebData (List Astronaut) -> Html Msg
astronautsDisplay astronauts =
    case astronauts of
        NotAsked ->
            div [ styleNoAstronaut ] [ text "Click the button mate!" ]

        Loading ->
            div [ styleNoAstronaut ] [ text "Calling the NASA, stay with me bro." ]

        Failure failure ->
            div [ styleNoAstronaut ] [ text ("Nobody up there... " ++ toString failure) ]

        Success astronauts ->
            table [ styleTable ] (astronautsTable astronauts)


astronautsTable : List Astronaut -> List (Html Msg)
astronautsTable astronauts =
    let
        tableHeader =
            tr []
                [ th [ styleTableItem ] [ text "Astronaut" ]
                , th [ styleTableItem ] [ text "Craft" ]
                ]
    in
        tableHeader :: List.map astronautItem astronauts


astronautItem : Astronaut -> Html Msg
astronautItem astronaut =
    tr []
        [ td [ styleTableItem ] [ text astronaut.name ]
        , td [ styleTableItem ] [ text astronaut.craft ]
        ]



-- STYLES


styleBody : Attribute msg
styleBody =
    style
        [ ( "backgroundColor", "black" )
        , ( "fontFamily", "sans-serif" )
        ]


styleMain : Attribute msg
styleMain =
    style
        [ ( "width", "100%" )
        , ( "height", "100%" )
        , ( "display", "flex" )
        , ( "justifyContent", "center" )
        ]


styleBox : Attribute msg
styleBox =
    style
        [ ( "backgroundColor", "darkgray" )
        , ( "width", "60%" )
        , ( "height", "auto" )
        , ( "alignSelf", "center" )
        , ( "border", "5px solid green" )
        , ( "padding", "20px" )
        ]


styleButton : Attribute msg
styleButton =
    style
        [ ( "borderRadius", "5px" )
        , ( "border", "5px solid green" )
        , ( "backgroundColor", "green" )
        , ( "boxShadow", "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)" )
        , ( "fontSize", "15px" )
        , ( "padding", "10px 15px" )
        , ( "margin", "0 10px 15px 10px" )
        ]


styleNoAstronaut : Attribute msg
styleNoAstronaut =
    style
        [ ( "height", "100px" )
        , ( "textAlign", "center" )
        , ( "verticalAlign", "middle" )
        , ( "lineHeight", "100px" )
        ]


styleTable : Attribute msg
styleTable =
    style
        [ ( "width", "100%" )
        , ( "borderCollapse", "collapse" )
        ]


styleTableItem : Attribute msg
styleTableItem =
    style
        [ ( "textAlign", "left" )
        , ( "border", "3px solid #ddd" )
        , ( "padding", "10px" )
        , ( "width", "50%" )
        ]



-- REQUESTS


getAstronauts : Cmd Msg
getAstronauts =
    Http.get "http://api.open-notify.org/astros.json" astronautsDecoder
        |> RemoteData.sendRequest
        |> Cmd.map AstronautsResponse


astronautsDecoder : Json.Decode.Decoder (List Astronaut)
astronautsDecoder =
    let
        astronautDecoder =
            Json.Decode.map2 Astronaut (field "name" string) (field "craft" string)
    in
        Json.Decode.at [ "people" ] (Json.Decode.list astronautDecoder)
