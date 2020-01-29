<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class IndexController extends AbstractController
{
    /**
     * @Route("/home", name="home_index")
     */
    public function index()
    {
        return $this->render('home/index.html.twig', [
        ]);
    }
}