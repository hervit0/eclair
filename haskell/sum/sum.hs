module Kata.ArrayPlusArray where

arrayPlusArray :: [Int]->[Int]->Int
arrayPlusArray xs ys = sum xs + sum ys

-- Alternative
-- arrayPlusArray xs ys = sum(xs ++ ys)
-- arrayPlusArray = (sum .) . (++)
-- arrayPlusArray = (+) `on` sum
-- arrayPlusArray x y = (foldl (+) 0 x) + (foldl (+) 0 y)
