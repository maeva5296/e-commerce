<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Lcobucci\JWT\Builder;
use Lcobucci\JWT\Signer\Key;
use Lcobucci\JWT\Signer\Hmac\Sha256;

class SecurityController extends AbstractController
{
    /**
     * @Route("/login", name="app_login")
     */
    public function login(AuthenticationUtils $authenticationUtils): Response
    {   
        if ($this->getUser()) {
            $signer = new Sha256();
            $time = \time();
            $token = (new Builder())->issuedBy('http://127.0.0.1:8000')
                                    ->permittedFor('http://localhost:3000')
                                    ->identifiedBy('AaaA', true)
                                    ->issuedAt($time)
                                    ->canOnlyBeUsedAfter($time + 60)
                                    ->expiresAt($time + 3600)
                                    ->withClaim('uid', 1)
                                    ->getToken($signer, new Key('testing'));
            $apitoken = $token->__toString();
            $token->getHeaders();
            $token->getClaims();

            echo $token->getHeader('jti') . PHP_EOL;
            echo $token->getClaim('iss') . PHP_EOL;
            echo $token->getClaim('uid') . PHP_EOL;
            echo $token .PHP_EOL;
        }
        // if ($this->getUser()) {
        //     return $this->redirectToRoute('target_path');
        // }

        // get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();
        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();

        return $this->render('security/login.html.twig', ['last_username' => $lastUsername, 'error' => $error]);
    }

    /**
     * @Route("/logout", name="app_logout")
     */
    public function logout()
    {
        throw new \Exception('This method can be blank - it will be intercepted by the logout key on your firewall');
    }
}
