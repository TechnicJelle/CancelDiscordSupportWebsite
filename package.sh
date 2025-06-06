#!/bin/bash

zip --recurse-paths --filesync "${PWD##*/}.xpi" ./* --exclude '*.git*'
