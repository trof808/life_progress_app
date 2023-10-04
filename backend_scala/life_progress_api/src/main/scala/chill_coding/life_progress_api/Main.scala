package chill_coding.life_progress_api

import cats.effect.{IO, IOApp}

object Main extends IOApp.Simple:
  val run = Life_progress_apiServer.run[IO]
