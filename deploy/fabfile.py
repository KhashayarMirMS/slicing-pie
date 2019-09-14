from fabric.contrib.files import exists
from fabric.api import cd, env, local, run

REPO_URL = 'git@gitlab.com:darskakaoo/slicing-pie.git'


def deploy():
    site_folder = f'/home/ubuntu/slicing-pie/'
    run(f'mkdir -p {site_folder}')
    with cd(site_folder):
        _get_latest_source()
        _jekyll()


def _get_latest_source():
    if exists('.git'):
        run('git fetch')
    else:
        run(f'git clone {REPO_URL} .')
    current_commit = local("git log -n 1 --format=%H", capture=True)
    run(f'git reset --hard {current_commit}')


def _jekyll():
    run('bundle update')
    run('jekyll build')
